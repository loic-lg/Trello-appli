export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type ApiAction =
  | 'get_card'
  | 'create_card'
  | 'update_card'
  | 'add_member_to_card'
  | 'remove_member_from_card'
  | 'get_card_members'
  | 'update_card_members'
  | 'add_card_to_list'
  | 'get_list'
  | 'create_list'
  | 'update_list'
  | 'get_card_actions'
  | 'add_comment_to_card'
  | 'get_card_checklists'
  | 'create_checklist'
  | 'add_checklist_to_card'
  | 'get_card_labels'
  | 'add_label_to_card'
  | 'get_board'
  | 'get_board_members'
  | 'add_member_to_board'
  | 'get_member'
  | 'get_member_boards'
  | 'move_card_to_list'
  | 'get_card_custom_fields';

export const getRoutes = (
  id?: string,
  idMember?: string
): Record<ApiAction, { method: HttpMethod; endpoint: string }> => ({
  get_card: { method: 'GET', endpoint: `/cards/${id}` },
  create_card: { method: 'POST', endpoint: `/cards` },
  update_card: { method: 'PUT', endpoint: `/cards/${id}` },
  add_member_to_card: { method: 'POST', endpoint: `/cards/${id}/idMembers` },
  remove_member_from_card: {
    method: 'DELETE',
    endpoint: `/cards/${id}/idMembers/${idMember}`,
  },
  get_card_members: { method: 'GET', endpoint: `/cards/${id}/members` },
  update_card_members: { method: 'PUT', endpoint: `/cards/${id}/idMembers` },
  add_card_to_list: { method: 'POST', endpoint: `/lists/${id}/cards` },
  get_list: { method: 'GET', endpoint: `/lists/${id}` },
  create_list: { method: 'POST', endpoint: `/lists` },
  update_list: { method: 'PUT', endpoint: `/lists/${id}` },
  get_card_actions: { method: 'GET', endpoint: `/cards/${id}/actions` },
  add_comment_to_card: { method: 'POST', endpoint: `/cards/${id}/actions/comments` },
  get_card_checklists: { method: 'GET', endpoint: `/cards/${id}/checklists` },
  create_checklist: { method: 'POST', endpoint: `/checklists` },
  add_checklist_to_card: { method: 'POST', endpoint: `/cards/${id}/checklists` },
  get_card_labels: { method: 'GET', endpoint: `/cards/${id}/labels` },
  add_label_to_card: { method: 'POST', endpoint: `/cards/${id}/labels` },
  get_board: { method: 'GET', endpoint: `/boards/${id}` },
  get_board_members: { method: 'GET', endpoint: `/boards/${id}/members` },
  add_member_to_board: { method: 'PUT', endpoint: `/boards/${id}/members/${idMember}` },
  get_member: { method: 'GET', endpoint: `/members/${id}` },
  get_member_boards: { method: 'GET', endpoint: `/members/${id}/boards` },
  move_card_to_list: { method: 'PUT', endpoint: `/cards/${id}/idList` },
  get_card_custom_fields: { method: 'GET', endpoint: `/cards/${id}/customFields` },
});
