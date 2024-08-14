import Image
 from "next/image";
export default function AboutSeries() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2">
        <div className="text-sm">
          <div>
            <b>ALPHA series</b>
            <div className="flex">
              Twelve titles that were originally written for the Christian group at Hamilton Boys High School, in 2012. They were intended to be introductory to a range of Christian topics. They have since been used within the Home School programme around NZ.
              <Image src="/about-alpha-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Alpha series"/>
            </div>
          </div>
          <div className="pt-4">
            <b>BETA series</b>
            <div className="flex">
              A series of 10 comprehensive books. They are based on the NZ Science curriculum. They include all the topics that the author has taught during his 38 years in the classroom.
              <Image src="/about-beta-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Beta series"/>
            </div>
          </div>
          <div className="pt-4">
            <b>GAMMA series</b>
            <div className="flex">
              These are two independent books that are mostly critical investigations into: 1) Evolutionary assumptions, and 2) traditions within the Christian community, plus countering the critics that don’t accept the historical reliability of Scripture.
              <Image src="/about-gamma-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Gamma series"/>
            </div>
          </div>
          <div className="pt-4">
            <b>DELTA series</b>
            <div className="flex">
              Seven titles that look at a range of biblical topics.
              <Image src="/about-delta-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Delta series"/>
            </div>
          </div>
          <br /><br />
          
        </div>
        <div className="md:col-start-2 text-sm pl-1">
          <div>
            <b>SIGMA series</b>
            <div className="flex">
              Twelve titles that take an in-depth look around regional New Zealand, examining evidences of a recent creation. Each field guide includes at least one special interest topic and a number of Christian scientists who worked in that general area of study.
              <Image src="/about-sigma-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Sigma series"/>
            </div>
          </div>
          <div className="pt-4">
            <b>PSI series</b>
            <div className="flex">
              Using his experience as a missions director in Hamilton Elim, and in conjunction with Michael Cook, an elder in the church, the author(s) has produced eight booklets that examine the main world religions.
              <Image src="/about-psi-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={200} alt="Psi series"/>
            </div>
          </div>
          <div className="pt-4">
            <b>OMEGA series</b>
            <div className="flex">
              This series of six titles examines the Church through the ages, beginning with Old Testament Church. It concludes with the signs and wonders happening around us, drawing attention to what we can expect in the closing days of this current Church Age. The views presented are NOT intended as dogmatic, but simply as one possible interpretation and viewpoint.
              <Image src="/about-omega-series.jpg" className="px-1 flex-none mr-0 ml-auto" width={180} height={180} alt="Omega series"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
