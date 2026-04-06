'use server';

export async function submitBooking(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const date = formData.get('date');
  const time = formData.get('time');
  const pkg = formData.get('package');

  console.log('--- NEW BOOKING RECEIVED ---');
  console.log(`Client: ${name} (${email})`);
  console.log(`Service: ${pkg}`);
  console.log(`Preferred Slot: ${date} at ${time}`);
  console.log('--- SIMULATING SLACK NOTIFICATION ---');
  
  // In a real app, you would use fetch to notify a Slack webhook:
  // await fetch(process.env.SLACK_WEBHOOK_URL!, {
  //   method: 'POST',
  //   body: JSON.stringify({ text: `New Booking: ${name} for ${pkg} on ${date}` })
  // });

  return { success: true };
}
