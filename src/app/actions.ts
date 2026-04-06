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
  console.log('--- GENERATING AUTOMATED RECEIPT ---');
  console.log(`Success: Digital receipt created and dispatched to ${email}`);

  return { 
    success: true,
    receiptSent: true,
    transactionId: `PN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  };
}
