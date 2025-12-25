import { SafeAreaView } from 'react-native-safe-area-context'
import Headercom from '@/components/reuse/header'
import { eventslist } from '@/assets/data/eventList'
import { traininglist } from '@/assets/data/tranningList'
import { countByMonth } from '@/components/reuse/dashboardHelper'
import DashboardChart from '@/components/reuse/DashboardChart'
const Home = () => {
  const eventChartData = countByMonth(eventslist)
  const trainingChartData = countByMonth(traininglist)

  return (
    <>
      <Headercom />
      <SafeAreaView style={{ padding: 16 }}>
        {/* <DashboardChart
          title="Events per Month"
          labels={eventChartData.labels}
          data={eventChartData.data}
        />

        <DashboardChart
          title="Trainings per Month"
          labels={trainingChartData.labels}
          data={trainingChartData.data}
        /> */}
      </SafeAreaView>
    </>
  )
}

export default Home
