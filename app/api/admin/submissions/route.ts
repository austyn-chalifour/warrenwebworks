import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { headers } from 'next/headers'

// Simple password protection (in production, use proper auth like NextAuth)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export async function GET(request: Request) {
  try {
    // Check authorization
    const headersList = await headers()
    const authorization = headersList.get('authorization')
    
    if (!authorization || authorization !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch all submissions
    const submissions = await client.fetch(`
      *[_type == "contactSubmission"] | order(submittedAt desc) {
        _id,
        _createdAt,
        name,
        email,
        phone,
        businessType,
        budgetRange,
        projectDetails,
        status,
        notes,
        submittedAt
      }
    `)

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: Request) {
  try {
    // Check authorization
    const headersList = await headers()
    const authorization = headersList.get('authorization')
    
    if (!authorization || authorization !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, status, notes } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      )
    }

    // Update submission
    const updated = await client.patch(id).set({
      ...(status && { status }),
      ...(notes !== undefined && { notes }),
    }).commit()

    return NextResponse.json({ success: true, submission: updated })
  } catch (error) {
    console.error('Error updating submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

