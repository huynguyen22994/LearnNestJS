export default function Template({ children }: { children: React.ReactNode }) {
    console.log('Template')
    return <div>
        <h1>Template</h1>
        {children}
        </div>
  }