import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, bottleneck } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required.' },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn('SLACK_WEBHOOK_URL is not configured.')
      return NextResponse.json(
        { error: 'Slack webhook URL is not configured.' },
        { status: 500 }
      )
    }

    const slackPayload = {
      text: `🚀 New Blueprint Request from ${name} (${company})`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🚀 New Blueprint Request',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`,
            },
            {
              type: 'mrkdwn',
              text: `*Company:*\n${company}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Biggest Bottleneck:*\n${bottleneck || '_None provided_'}`,
          },
        },
        {
          type: 'divider',
        },
      ],
    }

    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    })

    if (!slackRes.ok) {
      const errorText = await slackRes.text()
      console.error('Slack Webhook Error:', errorText)
      return NextResponse.json(
        { error: 'Failed to send message to Slack.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact Form Route Error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
