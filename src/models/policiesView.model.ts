class AgentDetailsViewModel {

        public agentName: string = null;

        public agentNumber: string = null;

    }

export class PoliciesViewModel {
    public policyNumber: string = null;

    public policyType: string = null;

    public zipCode: string = null;

    public state: string = null;

    public agentdetails: AgentDetailsViewModel[] = [];

}