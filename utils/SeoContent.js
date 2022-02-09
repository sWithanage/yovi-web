
export default function SeoContent({ title, description , image, keywords  }) {
        return (
        <>
                <title>{title} - YOVI Clothing</title>
                <meta name="description" content={description} />
                <meta name="description" content={description}/>
                <meta property="og:type" content="website"/>

                <meta property="og:url" content="https://yovi.vercel.app/productVege/1"/>

                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://yovi.vercel.app/productVege/1"/>

                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content={description}/>
                <meta property="twitter:image" content={image}/>

                <meta name="keywords" content={keywords}/>

                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="7 days"/>
                <meta name="author" content="Expergen"/>
        </>
    )
}
