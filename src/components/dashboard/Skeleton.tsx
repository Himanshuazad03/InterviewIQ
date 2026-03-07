import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardSkeleton() {
  return (
    <div className="flex h-screen bg-[#0B0B0F]">
      
      {/* Sidebar */}
      <div className="w-64 border-r p-6 flex flex-col justify-between">
        <div className="space-y-14">
          
          {/* Logo */}
          <Skeleton className="h-8 w-32" />

          {/* Nav items */}
          <div className="space-y-8">
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>

        {/* Readiness Card */}
        <div className="flex items-center justify-between rounded-xl border p-8">
          <div className="space-y-4">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-4 w-96" />
            <Skeleton className="h-8 w-72 rounded-full" />
          </div>

          {/* Circle chart placeholder */}
          <Skeleton className="h-32 w-32 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((i)=>(
            <div key={i} className="rounded-xl border p-6 space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-16" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}