import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Issue {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body_html: string;
  user: {
    gists_url: string;
    repos_url: string;
    following_url: string;
    starred_url: string;
    login: string;
    followers_url: string;
    type: string;
    url: string;
    subscriptions_url: string;
    received_events_url: string;
    avatar_url: string;
    events_url: string;
    html_url: string;
    site_admin: boolean;
    id: number;
    gravatar_id: string;
    node_id: string;
    organizations_url: string;
  };
  labels: { default: boolean; color: string; name: string; description: string; id: number; url: string; node_id: string }[];
  assignee: {
    gists_url: string;
    repos_url: string;
    following_url: string;
    starred_url: string;
    login: string;
    followers_url: string;
    type: string;
    url: string;
    subscriptions_url: string;
    received_events_url: string;
    avatar_url: string;
    events_url: string;
    html_url: string;
    site_admin: boolean;
    id: number;
    gravatar_id: string;
    node_id: string;
    organizations_url: string;
  };
  assignees: {
    gists_url: string;
    repos_url: string;
    following_url: string;
    starred_url: string;
    login: string;
    followers_url: string;
    type: string;
    url: string;
    subscriptions_url: string;
    received_events_url: string;
    avatar_url: string;
    events_url: string;
    html_url: string;
    site_admin: boolean;
    id: number;
    gravatar_id: string;
    node_id: string;
    organizations_url: string;
  }[];
  milestone: {
    creator: {
      gists_url: string;
      repos_url: string;
      following_url: string;
      starred_url: string;
      login: string;
      followers_url: string;
      type: string;
      url: string;
      subscriptions_url: string;
      received_events_url: string;
      avatar_url: string;
      events_url: string;
      html_url: string;
      site_admin: boolean;
      id: number;
      gravatar_id: string;
      node_id: string;
      organizations_url: string;
    };
    closed_at: string;
    description: string;
    created_at: string;
    title: string;
    closed_issues: number;
    url: string;
    due_on: string;
    labels_url: string;
    number: number;
    updated_at: string;
    html_url: string;
    id: number;
    state: string;
    open_issues: number;
    node_id: string;
  };
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request: { patch_url: string; html_url: string; diff_url: string; url: string };
  closed_at: string;
  created_at: string;
  updated_at: string;
  repository: {
    stargazers_count: number;
    is_template: boolean;
    pushed_at: string;
    subscription_url: string;
    language: string;
    branches_url: string;
    issue_comment_url: string;
    allow_rebase_merge: boolean;
    labels_url: string;
    subscribers_url: string;
    permissions: { pull: boolean; admin: boolean; push: boolean };
    temp_clone_token: string;
    releases_url: string;
    svn_url: string;
    subscribers_count: number;
    id: number;
    archive_url: string;
    allow_merge_commit: boolean;
    git_refs_url: string;
    forks_url: string;
    visibility: string;
    statuses_url: string;
    network_count: number;
    ssh_url: string;
    full_name: string;
    size: number;
    template_repository: string;
    languages_url: string;
    html_url: string;
    collaborators_url: string;
    clone_url: string;
    name: string;
    pulls_url: string;
    default_branch: string;
    hooks_url: string;
    trees_url: string;
    tags_url: string;
    private: boolean;
    contributors_url: string;
    has_downloads: boolean;
    notifications_url: string;
    open_issues_count: number;
    description: string;
    created_at: string;
    deployments_url: string;
    keys_url: string;
    has_projects: boolean;
    archived: boolean;
    has_wiki: boolean;
    updated_at: string;
    comments_url: string;
    stargazers_url: string;
    disabled: boolean;
    delete_branch_on_merge: boolean;
    git_url: string;
    has_pages: boolean;
    owner: {
      gists_url: string;
      repos_url: string;
      following_url: string;
      starred_url: string;
      login: string;
      followers_url: string;
      type: string;
      url: string;
      subscriptions_url: string;
      received_events_url: string;
      avatar_url: string;
      events_url: string;
      html_url: string;
      site_admin: boolean;
      id: number;
      gravatar_id: string;
      node_id: string;
      organizations_url: string;
    };
    allow_squash_merge: boolean;
    commits_url: string;
    compare_url: string;
    git_commits_url: string;
    topics: string[];
    blobs_url: string;
    git_tags_url: string;
    merges_url: string;
    downloads_url: string;
    has_issues: boolean;
    url: string;
    contents_url: string;
    mirror_url: string;
    milestones_url: string;
    teams_url: string;
    fork: boolean;
    issues_url: string;
    events_url: string;
    issue_events_url: string;
    assignees_url: string;
    watchers_count: number;
    node_id: string;
    homepage: string;
    forks_count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private repo = `vthinkxie/blog`;
  private url = `https://api.github.com/repos/${this.repo}/issues`;
  listArticles() {
    return this.httpClient.get<Issue[]>(`${this.url}?state=open&creator=vthinkxie`);
  }
  getArticle(issueNumber: number) {
    return this.httpClient.get<Issue>(`${this.url}/${issueNumber}?state=open&creator=vthinkxie`, {
      headers: new HttpHeaders().set('accept', 'application/vnd.github.VERSION.html+json')
    });
  }
  constructor(private httpClient: HttpClient) {}
}
