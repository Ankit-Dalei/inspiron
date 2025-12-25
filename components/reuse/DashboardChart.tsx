import { View, Text, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

const DashboardChart = ({ title, labels, data }: any) => {
  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        {title}
      </Text>

      <LineChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(66, 123, 255, ${opacity})`,
          labelColor: () => '#334155',
        }}
        bezier
        style={{ borderRadius: 12 }}
      />
    </View>
  )
}

export default DashboardChart
