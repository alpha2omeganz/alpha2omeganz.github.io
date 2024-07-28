export default function About() {
  return (
    <div className="text-md">
      <div className="text-sm text-center w-96 mx-auto -mt-10">
        The books are organised in categories based on subject and depth of study.  The Beta series will be released soon. They are in the final stages of preparation. Most of the titles in the Sigma series are published. Others are in their final publishing stages.
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div>
          <p>
            <b>ALPHA</b> series (12, A5)
          </p>
          <span className="italics text-xs">introductory topics</span>
          <ul className="list-disc ml-6">
            <li>God</li>
            <li>Creation</li>
            <li>Age of the Earth</li>
            <li>Genetics and the Bible</li>
            <li>Genesis Cataclysm and Babel</li>
            <li>Plate Tectonics and the Bible</li>
            <li>Historical Dinosaurs</li>
            <li>Judaism, Christianity and Islam</li>
            <li>Science: Relational or Religious?</li>
            <li>Christian Scientists</li>
            <li>Evolution: Reasons why it is unscientific</li>
            <li>Signs of the Times</li>
          </ul>
          <br />

          <p>
            <b>BETA</b> series (10, A4)
          </p>
          <span className="italics text-xs">comprehensive scientific investigations</span>
          <ul className="list-disc ml-6">
            <li>Time</li>
            <li>NZ Geology</li>
            <li>Plant Barachay</li>
            <li>Astronomy</li>
            <li>Humans & Animal Barachay</li>
            <li>Dinosaurs and Fossils</li>
            <li>Genetics and Ecology</li>
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
            <li>Traditions and Influences in Christianity</li>
          </ul>
          <br />

          <p>
            <b>DELTA</b> series (7, A5)
          </p>
          <span className="italics text-xs">Bible studies</span>
          <ul className="list-disc ml-6">
            <li>Creation</li>
            <li>In His Image</li>
            <li>Adam to Abram</li>
            <li>Genesis Cataclysm</li>
            <li>Israel&apos;s Neighbours</li>
            <li>Jesus the Messiah</li>
            <li>Heaven and Hell</li>
          </ul>
        </div>
        <div className="col-start-2">
          <p>
            <b>SIGMA</b> series (12, A5)
          </p>
          <span className="italics text-xs">regional field guides</span>
          <ul className="list-disc ml-6">
            <li>Northland and Northern Islands</li>
            <li>Auckland</li>
            <li>Coromandel</li>
            <li>Hauraki, Waikato and Taranaki</li>
            <li>Taupo Volcanic Zone</li>
            <li>Hawkes Bay to Wellington</li>
            <li>Marlborough Sounds, Mt Richmond and Kaikoura Ranges</li>
            <li>Tasman and Buller</li>
            <li>West Cost and Alpine Fault</li>
            <li>Canterbury and Otago</li>
            <li>Fiordland and Southland</li>
            <li>Chatham, Stewart and Southern Islands</li>
          </ul>
          <br />

          <p>
            <b>PSI</b> series (8, A5)
          </p>
          <span className="italics text-xs">studies of comparitive religions</span>
          <ul className="list-disc ml-6">
            <li>God - infinite and intimate</li>
            <li>The Word - became flesh</li>
            <li>Islam - a return to Law</li>
            <li>Hinduism - a spirituality of caste</li>
            <li>Buddhism - breaking the cycle</li>
            <li>Mormonism - an unchristian cult</li>
            <li>Cults - confused religions</li>
            <li>Secularism - denial of design</li>
          </ul>
          <br />

          <p>
            <b>OMEGA</b> series (6, A5)
          </p>
          <span className="italics text-xs">Church history and end times</span>
          <ul className="list-disc ml-6">
            <li>His Church of the Old Testament</li>
            <li>His Church of Apostolic Times</li>
            <li>His Church from 100 to 1517</li>
            <li>His Church from 1517 to Present</li>
            <li>His Church - the Prophetic</li>
            <li>Omega Times Now</li>
          </ul>
          <br />

          There are also a number of publications whichare one-off and produced for special purposes,but are still available to the public at no cost.
          <ul className="list-disc ml-6">
            <li>Preston Park, Tauranga (2024)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
