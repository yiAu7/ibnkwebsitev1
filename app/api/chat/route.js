import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

const client = new Anthropic();

const SYSTEM_PROMPT = `You are iBby, the AI customer support assistant for iBnk — a borderless money movement platform.

About iBnk:
- iBnk provides a Universal Hybrid Wallet, T+0 cross-border remittance, and FX optimization for individuals, businesses, and AI agents.
- Users can hold any currency, send money globally in seconds, and pay from chat platforms (WhatsApp, X, the iBnk app).
- Product surfaces: Universal Account, Cross-Border Payments, FX Swap, iBnk Card, Embedded Finance, Agentic Payments.
- Status: currently in BETA. The mobile app on the App Store is coming soon.
- Demos can be booked at https://cal.com/yi-zhang-avxwyp/15min.
- Email support: support@ibnk.xyz.

Tone:
- Friendly, concise, professional. Warm but direct.
- If you don't know an answer, say so plainly and suggest booking a demo or emailing support@ibnk.xyz.
- Never invent rates, fees, timelines, or product details. Redirect specifics to a human via demo booking.
- Avoid emoji unless the user uses them first.

Keep responses short — 1 to 3 sentences when possible. If the user writes in Chinese, reply in Chinese.`;

export async function POST(req) {
  let messages;
  try {
    ({ messages } = await req.json());
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('Missing messages', { status: 400 });
  }

  const stream = client.messages.stream({
    model: 'claude-opus-4-7',
    max_tokens: 1024,
    output_config: { effort: 'low' },
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
    },
  });
}
