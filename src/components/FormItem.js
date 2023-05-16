import { Form } from "react-bootstrap";
import { useState } from "react";
import './FormItem.css'

export const FormItem =  ({ item, onChange, answer, isReadOnly })  => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  console.log(answer)

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

   switch (item.type) {
      case 'text':
        return (
          <div className="form-group">
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
              disabled={isReadOnly}
              />
          </div>
          
        )
        break;
      // case 'password':
        return (
          <>
            <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => onChange(e.target.value, item.value)}
              disabled={isReadOnly}
            />
          </>
        );
        break;
      case 'information':
        return (
          <p>
            {item.label}
          </p>
        )
      case 'select':
        return (
          <div className="form-group">
            <Form.Label>{item.label}</Form.Label>
            <Form.Select
              aria-label={""}
              onChange={(e) => onChange(e.target.value, item.value)}
              disabled={isReadOnly}
              value={currentValue}
            >
              <option>{""}</option>
              {item.options.map((opt, index) => {
                return <option value={opt}>{opt}</option>;
              })}
            </Form.Select>
          </div>
        );

      return (
        <></>
      )
    }
  };
