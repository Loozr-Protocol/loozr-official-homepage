export default function RoadMap() {
  const quotas = [
    {
      label: "Q1 2022",
      agendas: ["Roadmap Creation", "Structure Formation", "Tokenomics"],
    },
    {
      label: "Q2 2022",
      agendas: [
        "Seed Sale",
        "Token Creation/Launch",
        "BETA dApp Launch",
        "Community Campaigns",
      ],
    },
    {
      label: "Q3 2022",
      agendas: ["Private Sale", "Feedbacks, R&D"],
    },
    {
      label: "Q1 2023",
      agendas: [
        "Loozr V2.0",
        "Year Review & Feedbacks",
        "Events & Partnerships",
      ],
    },
    {
      label: "Q2 2023",
      agendas: ["Loozr V3.0"],
    },
  ];
  return (
    <>
      <div className="views-element-container services mt-70">
        <div className="container">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              GOALS & PLANS
            </h6>
            <h3 className="wow" data-splitting>
              ROADMAP
            </h3>
            <span className="tbg">ROADMAP</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div>
          <div className="container">
            <div className="row">
              {quotas.map((quota) => (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="item-box xfact-item text-left wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <h6 className="mt-10">{quota.label}</h6>
                    <ul className="list-unstyled">
                      {quota.agendas.map((agenda) => (
                        <li><span></span> {agenda}</li>
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
