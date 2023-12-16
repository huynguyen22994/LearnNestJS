export function generateStaticParams() {
    return [
        { id: '1', type: 'test' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' }
    ]
}

export default function Page({ params }: { params: { id: string, type: string } }) {
    const { id, type } = params
    console.log('Id::::::', id)
    console.log('Type::::::', type)
    return (
        <>
            <h1>Here Product/Type Page:::::: hi....{id}</h1>
        </>
    )
}