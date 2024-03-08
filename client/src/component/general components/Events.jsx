import Button from "./Btn";

export default function Events() {
  return (
    <div className="max-w-lg border p-10">
      <div className="flex  pb-6 ">
        <div className="pr-10 pt-14">
          <h3 className="pl-5 text-black text-5xl font-semibold">15</h3>
          <p className="text-2xl">Sept.2024</p>
        </div>
        <div className="max-w-ms">
          <img src="src/asset/visite1.jpg" alt="" />
        </div>
      </div>
      <p className="pb-2 text-2xl">Exposition Virtuelle : Peace Goma</p>
      <p className="pb-6">Par : Israel Nzila</p>
      <div className="w-4/5 flex  pl-16">
      <Button name="PARTICIPER" class="bg-green-500 text-white text-base font-semibold p-2.5 px-4 rounded-3xl mr-8 hover:bg-inherit hover:text-green-500 hover:border-green-500 hover:border-2"/>
      <Button name="SPONSORISER" class=" bg-inherit text-sm text-green-500 font-semibold border-2 border-green-500  p-2.5 px-4 rounded-3xl"/>
      </div>
    </div>
  );
}
