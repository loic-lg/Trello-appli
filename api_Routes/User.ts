type TrelloID = string;

interface LimitsObject {
  status: string;
  disableAt: number;
  warnAt: number;
}

interface MemberPrefs {
  timezoneInfo: {
    offsetCurrent: number;
    timezoneCurrent: string;
    offsetNext: number;
    dateNext: string;
    timezoneNext: string;
  };
  privacy: {
    fullName: string;
    avatar: string;
  };
  sendSummaries: boolean;
  minutesBetweenSummaries: number;
  minutesBeforeDeadlineToNotify: number;
  colorBlind: boolean;
  locale: string;
  timezone: string;
  twoFactor: {
    enabled: boolean;
    needsNewBackups: boolean;
  };
}

export type User = {
  id: TrelloID;
  activityBlocked: boolean;
  avatarHash: string;
  avatarUrl: string;
  bio: string;
  bioData: object;
  confirmed: boolean;
  fullName: string;
  idEnterprise: TrelloID;
  idEnterprisesDeactivated: string[];
  idMemberReferrer: TrelloID;
  idPremOrgsAdmin: TrelloID[];
  initials: string;
  memberType: string;
  nonPublic: object;
  nonPublicAvailable: boolean;
  products: number[];
  url: string;
  username: string;
  status: string;
  aaEmail: string;
  aaEnrolledDate: string;
  aaId: string;
  avatarSource: string;
  email: string;
  gravatarHash: string;
  idBoards: TrelloID[];
  idOrganizations: TrelloID[];
  idEnterprisesAdmin: TrelloID[];
  limits: LimitsObject;
  loginTypes: string[];
  marketingOptIn: object;
  messagesDismissed: object;
  oneTimeMessagesDismissed: string[];
  prefs: MemberPrefs;
  trophies: string[];
  uploadedAvatarHash: string;
  uploadedAvatarUrl: string;
  premiumFeatures: string[];
  isAaMastered: boolean;
  ixUpdate: number;
  idBoardsPinned: TrelloID[];
};
