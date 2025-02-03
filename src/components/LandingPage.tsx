import { Button } from '@/components/ui/button';
import { Link } from "react-router"
export default function LandingPage() {
  return (
    <div className="bg-background">
      <div className="px-6 py-16 md:py-24">

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          Share Your Stories
        </h1>
        <p className="leading-7 text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
          Create, share, and discover amazing posts from creators around the world. 
          Join our community of storytellers and engage with content that matters to you.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/create">
            <Button size="lg">Create a post</Button>
          </Link>
          <Link to="/posts">
            <Button size="lg" variant="outline">View all posts</Button>
          </Link>

        </div>
      </div>

    </div>
  );
}