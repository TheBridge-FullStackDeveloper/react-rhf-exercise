import { useState } from "react"
import { useNavigate } from "react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchPosts() {
  const [searchId, setSearchId] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchId.trim()) {
      navigate(`/posts/${searchId}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Search Posts</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <Input
          type="text"
          placeholder="Enter Post ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
