export default function GalleryImage({show}) {
  return (
    <div className="gallery-image"><img src={show.image.medium} alt="TV Show Image"/></div>
  )
}
