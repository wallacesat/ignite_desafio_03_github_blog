/* eslint-disable camelcase */

import { api } from './lib/axios'

export type User = {
  avatarUrl: string
  bio: string
  company: string
  followers: number
  name: string
  login: string
  gitUrl: string
}

export async function fetchUser() {
  const { avatar_url, bio, company, followers, name, login, html_url } = (
    await api.get('users/wallacesat')
  ).data

  return {
    avatarUrl: avatar_url,
    bio,
    company: company || '',
    followers,
    name,
    login,
    gitUrl: html_url,
  } as User
}

export type Issue = {
  title: string
  createdAt: Date
  content: string
  postNumber: number
}

export type Issues = {
  totalCount: number
  issues: Issue[]
}

export async function fetchIssues(query?: string) {
  const { total_count, items } = (
    await api.get('search/issues', {
      params: {
        q: `${query || ''}repo:wallacesat/ignite_desafio_03_github_blog`,
      },
    })
  ).data

  const issues = items.map((issue: any) => ({
    title: issue.title,
    createdAt: new Date(issue.created_at),
    content: issue.body,
    postNumber: issue.number,
  }))

  return {
    totalCount: total_count,
    issues,
  } as Issues
}

interface PostedIssue {
  postGitUrl: string
  title: string
  login: string
  createdAt: Date
  commentsCount: number
  text: string
}

export async function fetchIssue(issueNumber: number) {
  const {
    html_url,
    title,
    user: { login },
    created_at,
    comments,
    body,
  } = (
    await api.get(
      `repos/wallacesat/ignite_desafio_03_github_blog/issues/${issueNumber}`,
    )
  ).data

  return {
    postGitUrl: html_url,
    title,
    login,
    createdAt: created_at,
    commentsCount: comments,
    text: body,
  } as PostedIssue
}
