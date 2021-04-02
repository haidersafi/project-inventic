import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie,Polar, HorizontalBar  } from 'react-chartjs-2';



class ChartSection3 extends Component {
    render(){
        const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
              },
            ],
          }

        const option={
            polar:'true'
        }
          
        
        return (
            <MDBRow className="mb-4">
                <MDBCol md="8"className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                        <MDBCardHeader>Polar chart</MDBCardHeader>
                        <Polar data={data}/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
               </MDBRow>
        )
    }
}

export default ChartSection3;

