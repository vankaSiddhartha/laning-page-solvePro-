"use client"
import Image from 'next/image'
import { HeroSection } from '@/components/hero-section-dark'
import { Hero } from '@/components/ui/animated-hero'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'

export default function Home() {
  return (
  <>
        <HeroSection
      title="Welcome to Our Platform"
      subtitle={{
        regular: "Transform your ideas into ",
        gradient: "beautiful digital experiences",
      }}
      description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
      ctaText="Get Started"
      ctaHref="/signup"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}

    />
 
    </>
  )
  
}
