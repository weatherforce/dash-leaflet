import dash
import dash_leaflet as dl
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = dl.Map(
    [
        dl.TileLayer(),
        dl.DashControl([html.Div([html.H1("Toto"), html.H2("Nana"), html.P("et ouai mon gars")])], id="input"),
        dl.MeasureControl(position="topleft",
                          primaryLengthUnit="kilometers",
                          primaryAreaUnit="hectares",
                          activeColor="#214097",
                          completedColor="#972158"),
    ],
    style={
        'width': '1000px',
        'height': '500px',
        'margin': 'auto',
        'margin-top': '150px',
    })

if __name__ == '__main__':
    app.run_server(debug=True)
