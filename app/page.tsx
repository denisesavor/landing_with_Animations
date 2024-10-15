"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/mode-toggle'
import { ParallaxText } from '@/components/parallax-text'
import { FeatureCard } from '@/components/feature-card'
import { Rocket, Zap, Shield, Users, BarChart } from 'lucide-react'
import { TestimonialCard } from '@/components/testimonial-card'
import { PricingCard } from '@/components/pricing-card'
import { ContactForm } from '@/components/contact-form'
import { BackgroundAnimation } from '@/components/background-animation'
import { GlassCard } from '@/components/glass-card'
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper'

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <ParallaxProvider>
      <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
        <BackgroundAnimation />
        
        {/* Hero Section */}
        <ParallaxBanner
          layers={[
            { image: '/images/hero-bg.jpg', speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <GlassCard className="p-8 rounded-xl">
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-center"
                    >
                      <h1 className="text-6xl font-bold mb-4">Welcome to Our Amazing App</h1>
                      <p className="text-xl mb-8">Experience the future of web applications</p>
                      <Button size="lg" variant="secondary" className="animate-pulse">
                        Get Started
                      </Button>
                    </motion.div>
                  </GlassCard>
                </div>
              ),
            },
          ]}
          className="h-screen"
        />

        {/* Features Section */}
        <section className="w-full py-20 bg-background/50 backdrop-blur-lg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimationWrapper>
                <FeatureCard
                  icon={<Rocket className="h-6 w-6" />}
                  title="Fast Performance"
                  description="Experience lightning-fast load times and smooth animations."
                />
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <FeatureCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Easy Integration"
                  description="Seamlessly integrate with your existing projects and workflows."
                />
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <FeatureCard
                  icon={<Shield className="h-6 w-6" />}
                  title="Secure & Reliable"
                  description="Built with security in mind, ensuring your data is always protected."
                />
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section ref={ref} className="w-full py-12 bg-primary/10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ParallaxText baseVelocity={-5}>Scroll for more • Amazing features • Unlimited possibilities •</ParallaxText>
            <ParallaxText baseVelocity={5}>Innovative design • Cutting-edge technology • Seamless experience •</ParallaxText>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-secondary/20 backdrop-blur-lg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ParallaxBanner
                layers={[{ speed: -10 }]}
                className="h-full"
              >
                <TestimonialCard
                  name="John Doe"
                  role="CEO, TechCorp"
                  content="This app has revolutionized our workflow. Highly recommended!"
                />
              </ParallaxBanner>
              <ParallaxBanner
                layers={[{ speed: 10 }]}
                className="h-full"
              >
                <TestimonialCard
                  name="Jane Smith"
                  role="Designer, CreativeCo"
                  content="The user interface is intuitive and the features are top-notch."
                />
              </ParallaxBanner>
              <ParallaxBanner
                layers={[{ speed: -10 }]}
                className="h-full"
              >
                <TestimonialCard
                  name="Mike Johnson"
                  role="Developer, CodeMasters"
                  content="As a developer, I appreciate the clean code and easy integration."
                />
              </ParallaxBanner>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-20 bg-background/50 backdrop-blur-lg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimationWrapper>
                <PricingCard
                  title="Basic"
                  price="$9.99"
                  features={["1 User", "Basic Features", "Email Support"]}
                />
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <PricingCard
                  title="Pro"
                  price="$19.99"
                  features={["5 Users", "Advanced Features", "Priority Support"]}
                  highlighted={true}
                />
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <PricingCard
                  title="Enterprise"
                  price="$49.99"
                  features={["Unlimited Users", "Custom Features", "24/7 Support"]}
                />
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-20 bg-primary/10 backdrop-blur-lg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-background/80 backdrop-blur-lg text-center">
          <p>&copy; 2023 Our Amazing App. All rights reserved.</p>
          <ModeToggle />
        </footer>
      </main>
    </ParallaxProvider>
  )
}