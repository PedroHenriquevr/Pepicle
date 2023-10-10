export default function Main() {
    return(
        <div className="container mx-auto px-4 md:px-12 h-[100vh]">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="bg-white rounded-lg shadow-lg">
        <img className="h-48 w-full object-cover" src="https://i.imgur.com/u1ys95m.png" alt="Playlist of the day"/>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Playlist of the day</h2>
          <p className="text-gray-500">60 tracks <span className="text-orange">hours 37 minutes</span></p>
          <a href="#" className="btn btn-primary">Play</a>
        </div>
      </div>
    </div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="bg-black rounded-lg shadow-lg">
        <video className="h-48 w-full object-cover" src="https://www.youtube.com/embed/0x9-84xs36A" controls></video>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Between Death and Dreams</h2>
          <p className="text-gray-500">Brand of Sacrifice</p>
          <p className="text-gray-500">0:00/412</p>
          <a href="#" className="btn btn-primary">Watch</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}