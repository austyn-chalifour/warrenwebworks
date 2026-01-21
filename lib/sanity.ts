import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Query helpers
export async function getPortfolioProjects() {
  return client.fetch(`*[_type == "portfolio"] | order(publishedAt desc)`)
}

export async function getFeaturedProjects() {
  return client.fetch(`*[_type == "portfolio" && featured == true] | order(publishedAt desc)[0...3]`)
}

export async function getPortfolioProject(slug: string) {
  return client.fetch(`*[_type == "portfolio" && slug.current == $slug][0]`, { slug })
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)
}

export async function getFeaturedBlogPosts() {
  return client.fetch(`*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3]`)
}

export async function getBlogPost(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
}

export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember"] | order(order asc)`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(publishedAt desc)`)
}

export async function getFeaturedTestimonials() {
  return client.fetch(`*[_type == "testimonial" && featured == true] | order(publishedAt desc)[0...3]`)
}

