type TrelloID = string;

interface Prefs {
  // Add Prefs properties as needed
}

interface Limits {
  // Add Limits properties as needed
}

export interface Workspace {
  id: TrelloID;
  name: string;
  desc: string;
  descData: string;
  closed: boolean;
  idMemberCreator: TrelloID;
  idOrganization: TrelloID;
  pinned: boolean;
  url: string;
  shortUrl: string;
  prefs: Prefs;
  labelNames: Record<string, unknown>;
  limits: Limits;
  starred: boolean;
  memberships: string;
  shortLink: string;
  subscribed: boolean;
  powerUps: string;
  dateLastActivity: string;
  dateLastView: string;
  idTags: string;
  datePluginDisable: string;
  creationMethod: string;
  ixUpdate: number;
  templateGallery: string;
  enterpriseOwned: boolean;
}
