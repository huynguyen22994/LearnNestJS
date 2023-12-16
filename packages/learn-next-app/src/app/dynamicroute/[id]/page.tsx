
import { Viewport } from 'next'

export const viewport: Viewport = {
    themeColor: 'white'
}

export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' }
    ]
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    console.log(id)
    return (
        <>
            <h1>Here Product Page:::::: hi....{id}</h1>
        </>
    )
}