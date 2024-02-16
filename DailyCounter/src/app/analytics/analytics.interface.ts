type clickData = { link: string, clicks: number }

type clickedLinks = [clickData];

export interface Analytics {
  date: string
  pageViews: number
  clickedLinks: clickedLinks
}