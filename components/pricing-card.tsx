import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className={`flex flex-col ${highlighted ? 'border-primary shadow-lg' : ''}`}>
        <CardHeader>
          <h3 className="text-2xl font-bold text-center">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-4xl font-bold text-center mb-6">{price}<span className="text-xl font-normal">/month</span></p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={highlighted ? "default" : "outline"}>
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}