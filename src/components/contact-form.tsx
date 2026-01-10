import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>For Customer Support, Send us a note.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                required
                id="email"
                type="email"
                placeholder="Jean Jacques Leman"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                className="h-30 resize-none"
                placeholder="Type your message here."
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="primary" type="submit" className="w-full" size="lg">
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
}
