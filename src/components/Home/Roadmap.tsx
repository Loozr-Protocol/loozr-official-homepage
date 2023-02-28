export default function RoadMap() {
  const quotas = [
    {
      label: "Phase 01",
      agendas: [
        "Ideation/structure formation",
        "Core team formation",
        "Market research",
      ],
    },
    {
      label: "Phase 02",
      agendas: [
        "Token launch",
        "Seed round",
        "Artiste Tokenization Launch v1.0 [Web Only]",
        "PoC LoozrVerse - Metaverse",
      ],
    },
    {
      label: "Phase 03",
      agendas: [
        "Private sale",
        "Song Tokenization Launch v2.0 [Web only]",
        "Video streaming/Audio streaming",
        "TikTok integration",
        "Music NFT marketplace",
      ],
    },
    {
      label: "Phase 04",
      agendas: [
        "Moment Tokenization v3.0",
        "Live-streaming/Tipping feature ",
        "Interoperability for other blockchains",
      ],
    },
    {
      label: "Long term",
      agendas: [
        "Event ticketing",
        "Live audio conversations",
        "Full Movie Tokenization",
        "LoozrVerse XR Music World",
      ],
    },
  ];
  return (
    <>
      <div className="views-element-container services lg:pt-12 !px-2 md:!px-20 mt-70">
        <div className="container">
          <div className="sec-head custom-font text-center">
            <h6 id="gradenttext"  className="wow  fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
              GOALS & PLANS
            </h6>
            <h3 className="wow text-white" data-splitting>
              ROADMAP
            </h3>
            <span className="tbg lg:-top-[100px]">ROADMAP</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div>
          <div className="container">
            <div className="row">
              {quotas.map((quota, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    className="item-box xfact-item text-left wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <h6 className="mt-10 text-[#536079] font-medium txt ">{quota.label}</h6>
                    <ul className="list-unstyled">
                      {quota.agendas.map((agenda, i) => (
                        <li className="text-white" key={i}><span></span> {agenda}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
}
