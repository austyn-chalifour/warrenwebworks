import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.businessType || !body.budgetRange || !body.projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create document in Sanity
    const submission = await client.create({
      _type: 'contactSubmission',
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      businessType: body.businessType,
      budgetRange: body.budgetRange,
      projectDetails: body.projectDetails,
      status: 'new',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true, 
      id: submission._id 
    })
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    )
  }
}

