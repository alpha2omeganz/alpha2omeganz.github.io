export default function About() {
  const baseUrl = "https://api.alpha2omega.nz/resources";
  return (
    <div className="text-md">
      <div className="text-sm text-center lg:w-96 lg:mx-auto lg:-mt-5">
        The books are organised in categories based on subject and depth of study.  The Beta series will be released soon. They are in the final stages of preparation. Most of the titles in the Sigma series are published. Others are in their final publishing stages.
      </div>
      <div className="grid grid-cols-2 mt-2 mx-1">
        <div>
          <p>
            <b>ALPHA</b> series (12, A5)
          </p>
          <span className="italics text-xs">introductory topics</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/ALPHA - God`}>God</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Creation`}>Creation</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Age of the Earth`}>Age of the Earth</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Genetics and the Bible`}>Genetics and the Bible</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Genesis Cataclysm and Babel`}>Genesis Cataclysm and Babel</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Plate Tectonics and the Bible`}>Plate Tectonics and the Bible</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Historical Dinosaurs`}>Historical Dinosaurs</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Judaism Christianity and Islam`}>Judaism, Christianity and Islam</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Science Relational or Religious`}>Science: Relational or Religious?</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Christian Scientists`}>Christian Scientists</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Evolution Reasons why it is unscientific`}>Evolution: Reasons why it is unscientific</a></li>
            <li><a className="underline" href={`${baseUrl}/ALPHA - Signs of the Times`}>Signs of the Times</a></li>
          </ul>
          <br />

          <p>
            <b>BETA</b> series (10, A4)
          </p>
          <span className="italics text-xs">comprehensive scientific investigations</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/BETA - Time`}>Time</a></li>
            <li>NZ Geology</li>
            <li><a className="underline" href={`${baseUrl}/BETA - Plant Barachay`}>Plant Barachay</a></li>
            <li><a className="underline" href={`${baseUrl}/BETA - Astronomy`}>Astronomy</a></li>
            <li>Humans & Animal Barachay</li>
            <li>Dinosaurs and Fossils</li>
            <li><a className="underline" href={`${baseUrl}/BETA - Genetics and Ecology`}>Genetics and Ecology</a></li>
            <li>Plate Tectonics and Earthquakes</li>
            <li>Volcanoes</li>
            <li>Ice Ages</li>
          </ul>
          <br />
          
          <p>
            <b>GAMMA</b> series (2, A5)
          </p>
          <span className="italics text-xs">critical analysis</span>
          <ul className="list-disc ml-6">
            <li>Evolutionary Assumptions Investigated</li>
            <li><a className="underline" href={`${baseUrl}/GAMMA - Traditions and Influences`}>Traditions and Influences in Christianity</a></li>
          </ul>
          <br />

          <p>
            <b>DELTA</b> series (7, A5)
          </p>
          <span className="italics text-xs">Bible studies</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/DELTA - Creation`}>Creation</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - In His Image`}>In His Image</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - Adam to Abram`}>Adam to Abram</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - Genesis Cataclysm`}>Genesis Cataclysm</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - Israels Neighbours`}>Israel&apos;s Neighbours</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - Jesus the Messiah`}>Jesus the Messiah</a></li>
            <li><a className="underline" href={`${baseUrl}/DELTA - Heaven and Hell`}>Heaven and Hell</a></li>
          </ul>
        </div>
        <div className="col-start-2">
          <p>
            <b>SIGMA</b> series (12, A5)
          </p>
          <span className="italics text-xs">regional field guides</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/SIGMA - Northland and Northern Islands`}>Northland and Northern Islands</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Auckland`}>Auckland</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Coromandel`}>Coromandel</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Hauraki Waikato and Taranaki`}>Hauraki, Waikato and Taranaki</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Taupo Volcanic Zone`}>Taupo Volcanic Zone</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Hawkes Bay to Wellington`}>Hawkes Bay to Wellington</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Marlborough Sounds Mt Richmond and Kaikoura Ranges`}>Marlborough Sounds, Mt Richmond and Kaikoura Ranges</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Tasman and Buller`}>Tasman and Buller</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - West Coast and Alpine Fault`}>West Coast and Alpine Fault</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Canterbury and Otago`}>Canterbury and Otago</a></li>
            <li><a className="underline" href={`${baseUrl}/SIGMA - Fiordland and Southland`}>Fiordland and Southland</a></li>
            <li>Chatham, Stewart and Southern Islands</li>
          </ul>
          <br />

          <p>
            <b>PSI</b> series (8, A5)
          </p>
          <span className="italics text-xs">studies of comparitive religions</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/PSI - God - infinite and intimate`}>God - infinite and intimate</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - The Word - became flesh`}>The Word - became flesh</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Islam - a return to Law`}>Islam - a return to Law</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Hinduism - a spirituality of caste`}>Hinduism - a spirituality of caste</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Buddhism - breaking the cycle`}>Buddhism - breaking the cycle</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Mormonism - an unchristian cult`}>Mormonism - an unchristian cult</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Cults - confused religions`}>Cults - confused religions</a></li>
            <li><a className="underline" href={`${baseUrl}/PSI - Atheism - no objective morality`}>Atheism - no objective morality</a></li>
          </ul>
          <br />

          <p>
            <b>OMEGA</b> series (6, A5)
          </p>
          <span className="italics text-xs">Church history and end times</span>
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/OMEGA - His Church of the Old Testament`}>His Church of the Old Testament</a></li>
            <li><a className="underline" href={`${baseUrl}/OMEGA - His Church of Apostolic Times`}>His Church of Apostolic Times</a></li>
            <li><a className="underline" href={`${baseUrl}/OMEGA - His Church from 100 to 1517`}>His Church from 100 to 1517</a></li>
            <li><a className="underline" href={`${baseUrl}/OMEGA - His Church from 1517 to Present`}>His Church from 1517 to Present</a></li>
            <li><a className="underline" href={`${baseUrl}/OMEGA - His Church - the Prophetic`}>His Church - the Prophetic</a></li>
            <li><a className="underline" href={`${baseUrl}/OMEGA - Omega Times Now`}>Omega Times Now</a></li>
          </ul>
          <br />

          There are also a number of publications which are one-off and produced for special purposes, but are still available to the public at no cost.
          <ul className="list-disc ml-6">
            <li><a className="underline" href={`${baseUrl}/Preston Park`}>Preston Park, Tauranga (2024)</a></li>
            <li><a className="underline" href={`${baseUrl}/China 1980s Golden Hues`}>China 1980&apos;s Golden Hues</a></li>
            <li><a className="underline" href={`${baseUrl}/Chinese Ancient Characters`}>Chinese Ancient Characters</a></li>
            <li><a className="underline" href={`${baseUrl}/Snapshots of Karakariki Reserve`}>Snapshots of Karakariki Reserve</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
