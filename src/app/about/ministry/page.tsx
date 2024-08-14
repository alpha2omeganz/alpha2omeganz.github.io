import Image
 from "next/image";
export default function AboutMinistry() {
  return (
    <div>
      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-2 text-sm text-justify">
          In 1988, Peter was teaching plate tectonics to a Year 10 Science class. Knowing he was a follower of Jesus, one of his colleagues challenged him, asking what did he believe about origins? That began a journey that continues today... 
          <br /><br />
          Some say there is conflict between a Christian worldview and a Science-based worldview, but the answer is a strong, NO! Real Science is knowledge based on observational data. It is limited in its scope. It cannot legitimately provide answers, such as how, why or even when. Those three questions are 
          philosophical and subject to personal bias.
          <br /><br />
          Much of today&apos;s Science, especially in the disciplines of Biology, Geology and Astronomy, if not based on empirical data, are based on assumptions, swayed by bias and limited by incomplete data. Science is a human invention, a human interpretation of the world around us. It cannot solve the problems of this life, in fact, it creates bigger problems because God is left out of His Creation.
          <br /><br />
          <div className="md:float-left">
            <Image src="/mt-cook.jpg" className="pr-1 pb-2" width={340} height={200} alt="Mt Cook"/>
            <span className="absolute ml-2 -mt-[22px] text-2xs text-white">Mt Cook, viewed in the late afternoon sun, towering above Lake Pukaki</span>          
          </div>
          In today&apos;s secular society, young people are not given a choice. They are told what to believe without any indication of the assumptions that have been used to drive those interpretations. Contrary evidence is ignored or criticised. People are left believing as fact, the bias that teachers have presented them. James, the writer of a New Testament letter, warned against being a teacher, as teachers will incur a more strict judgement than others.
          <br /><br />
          The electronic books in this website are free to download and distribute with all liberty. Although the publications are copyright, the text and images are freely available to be used provided the author is acknowledged. Their use does not imply that I, the author, agree with the intent or purpose of the user.          
        </div>
        <div className="md:col-start-3 md:ml-4 text-sm">
          <Image src="/dave-patterson.jpg" className="pr-1" width={280} height={200} alt="Dave Patterson"/>
          <div className="text-xs">
            <b>Dedication:</b>
            <br />
            Dave Patterson (1933-2005), a lover of Truth and skilled as an acoustics and electrical engineer. Dave shared a common vision of providing scientific resources for New Zealanders, about New Zealand, by New Zealanders. 
            <br /><br />
            This ministry is a continuation of that vision.
          </div>
        </div>
      </div>
    </div>
  );
}
