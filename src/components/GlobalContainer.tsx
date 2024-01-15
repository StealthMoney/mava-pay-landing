import { cn } from '@/lib/utils'
import React from 'react'

type GlobalContainerProps = React.HTMLAttributes<HTMLDivElement>

const GlobalContainer = ({className, children}: GlobalContainerProps) => {
  return (
    <div className='px-[24px] lg:px-[80px] w-full flex justify-center'>
      <div className={cn('w-full max-w-container', className)}>
        {children}
      </div>
    </div>
  )
}

export default GlobalContainer