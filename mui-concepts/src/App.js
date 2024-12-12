import logo from './logo.svg';
import './App.css';
import MuiMockup from './components/muiMockup/MuiMockup';
import FormComponent from './components/form/FormComponent';
import TableComponent from './components/table/TableComponent';
import DialogComponent from './components/dialog/DialogComponent';
import AccordianComponent from './components/accordian/AccordianComponent';




function App() {
  return (
    <>
    <h1>Grid component</h1>
    <MuiMockup/>
    <h1>Form component</h1>
    <FormComponent/>
    <h1>Table component</h1>
    <TableComponent/>
    <h1>Dialog component</h1>
    <DialogComponent/>
    <h1>Accordian component</h1>
    <AccordianComponent/>
    </>
  );
}

export default App;
