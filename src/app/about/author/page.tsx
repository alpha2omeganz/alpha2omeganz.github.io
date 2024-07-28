import Image
 from "next/image";
export default function AboutAuthor() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 text-sm text-justify">
          Born in Christchurch, NZ, Peter grew up in a Christian family, being dedicated in a Methodist Church, and baptised in a Baptist Church. One Sunday night, the Holy Spirit simply said, “Go.” He then joined the New Life Center church and became part of the orchestra, even prophesying on the trumpet. It was at NLC that he picked up his missions interest, being involved in the Malaysian student group and then in the Chinese Church ministry. Peter was given a book on the Chinese language, and China became his adopted country. 
          <br /><br />
          After majoring in Chemistry at Canterbury University, he added Chinese to his Science degree and was then twice invited to go to China to teach English. While there, he travelled extensively around the country. Those years were foundational for later opportunities for ministry.
          <br /><br />
          During the second tent-making experience, the missions pastor from Christchurch NLC told him he didn&apos;t belong in their church. Unusual for a pastor to say that, but Peter knew God was speaking to him. Returning to New Zealand, Peter married Shienping, a Malaysian student whom God had clearly instructed was His choice for him to marry. Shienping was also told in a dream that Peter was to be her husband. After getting married in Wellington, they both moved to Hamilton in 1990 and joined the Elim church. Max Palmer had been accurate in his prophetic word, three years earlier.
          <br /><br />
          Peter&apos;s research into the Creation / Evolution issue began in 1988. Then in 2009, the Holy Spirit instructed Peter to begin writing everything he had been learning. These series of titles are the fruit of those investigations.
          <br /><br />
          It is a well known saying that, &apos;God does not call the qualified, but qualifies the called.&apos; The author has no hesitation in admitting he is unskilled, and was the least in his classes at school, yet his willingness to listen to what God was and is saying, plus obedience to do His will, are producing an eternal weight of glory for God&apos;s kingdom.
          <br /><br />
          The challenge is now passed on to you to continue 
          His kingdom work in New Zealand.
        </div>
        <div className="ml-5">
          <Image src="peter-1.jpg" className="pr-1" width={240} height={200} alt="Alpha series"/>
          <Image src="peter-2.jpg" className="mt-2" width={240} height={200} alt="Beta series"/>
          <Image src="peter-3.jpg" className="pr-1 mt-2 float-start" width={130} height={200} alt="Delta series"/>
          <Image src="peter-4.jpg" className="mt-2 float-end" width={140} height={200} alt="Psi series"/>
        </div>
      </div>
    </div>
  );
}
