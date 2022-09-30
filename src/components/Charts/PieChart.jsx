import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, Inject, AccumulationSeriesDirective, PieSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { pieChartData } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const PieChart = () => {

  const { currentMode, currentColor } = useStateContext()
  return (
    <AccumulationChartComponent id="line-chart" height='420px' background={currentMode === "Dark" ? '#33373E' : '#FFFFFF' }>
      <Inject services={[PieSeries, Tooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius="100%" dataLabel={{visible: true, position: 'Outside', name: 'text'}}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart
