// import { NextResponse } from 'next/server'; 
// import { readFileSync } from 'fs'; 
// import { join } from 'path';

// export async function GET() {
//   try {
//     const filePath = join(process.cwd(), 'src/data/chef.json');
//     const data = JSON.parse(readFileSync(filePath, 'utf-8'));
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
//   }
// }
