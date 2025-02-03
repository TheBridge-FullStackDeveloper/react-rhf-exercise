import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CalendarIcon, Clock, User, ArrowLeft } from "lucide-react"


interface Post {
  id: number
  title: string
  content: string
  category: string
  tags: string[]
  author: string
  publishedDate: string
  readTime: string
}

export function ViewSinglePost() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError("Failed to load post. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <AlertTitle>Not Found</AlertTitle>
          <AlertDescription>The requested post could not be found.</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
        <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
            <Link to="/posts" className="hover:text-primary">
            <ArrowLeft className="h-6 w-6" />
            </Link>
            <Badge variant="outline">{post.category}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
        </div>
        </div>
          <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Anon</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {post.content}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="w-full border-t pt-4">
            <h3 className="font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ViewSinglePost;