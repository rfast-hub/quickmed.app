import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Calendar, MessageCircle, Salad, Upload } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Activity className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Quick Med</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
        <div className="ml-4 flex items-center space-x-2">
          <Button variant="outline" size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Quick Med
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your all-in-one health platform for personalized workout plans, nutrition advice, and AI-powered
                  health insights.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Upload className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Upload Health Data</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Upload your physical and bloodwork data for AI analysis.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Brain className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">AI Health Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized insights based on your health data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Calendar className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Workout Plans</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Receive tailored workout plans based on your goals and health data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Salad className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Nutrition Plans</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized nutrition advice to complement your workouts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MessageCircle className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">24/7 AI Health Bot</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ask health-related questions anytime with our AI chatbot.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Activity className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Calorie Counter</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Track your food intake and get AI-powered nutrition feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Plan</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Free Starter Plan</CardTitle>
                  <CardDescription>Get started with basic features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$0/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      24/7 AI Health Bot
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Plan</CardTitle>
                  <CardDescription>Unlock more features for better health</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$10/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      24/7 AI Health Bot
                    </li>
                    <li className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Personalized Workout Plans
                    </li>
                    <li className="flex items-center">
                      <Salad className="mr-2 h-4 w-4" />
                      Nutrition Plans
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ultimate Health Plan</CardTitle>
                  <CardDescription>Complete health tracking and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$30/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      24/7 AI Health Bot
                    </li>
                    <li className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Personalized Workout Plans
                    </li>
                    <li className="flex items-center">
                      <Salad className="mr-2 h-4 w-4" />
                      Nutrition Plans
                    </li>
                    <li className="flex items-center">
                      <Activity className="mr-2 h-4 w-4" />
                      Calorie & Food Tracking
                    </li>
                    <li className="flex items-center">
                      <Upload className="mr-2 h-4 w-4" />
                      Bloodwork & Physical Analysis
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Quick Med. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}