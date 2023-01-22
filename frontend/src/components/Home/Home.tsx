function Home() {
  return (
    <div>
      <div>
        <picture>
          <source
            srcSet="Backgrounds/razer-blade-16-18-homepage-mobile.jpg"
            media="(max-width: 767px)"
          />
          <img
            src="Backgrounds/razer-blade-16-18-homepage-desktop.jpg "
            alt="Razer Blade"
            className="object-cover min-h-[75vh]"
          />
        </picture>
      </div>
    </div>
  )
}

export default Home
