const partners = [
  "TechCorp", "InnovateLab", "CloudFlow", "DataSync", "AgileTeam", 
  "StreamlineHQ", "ConnectPro", "WorkflowMax", "TeamBridge", "ProjectHub",
  "CollabSpace", "SyncMaster", "FlowDesk", "TaskForce", "ProConnect"
];

const PartnersSection = () => {
  return (
    <section className="py-12  border-b border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            Trusted by 500+ companies worldwide
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-marquee space-x-12">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-16 px-6 bg-card border border-card-border rounded-lg"
              >
                <span className="text-card-foreground font-semibold text-lg tracking-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;