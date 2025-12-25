export const countByMonth = (list: any[]) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const counts = new Array(months.length).fill(0)

  list.forEach(item => {
    const monthIndex = new Date(item.date).getMonth()
    counts[monthIndex] += 1
  })

  return { labels: months, data: counts }
}
