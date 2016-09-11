const input =
  [ {
      name: "A",
      experiences: ["e1", "e2", "e3"]
    }
  , {
      name: "B",
      experiences: ["e1", "e2"]
    }
  , {
      name: "C",
      experiences: ["e2", "e3"]
    }
  ]

const expected =
  { "e1": ["A", "B"]
  , "e2": ["A", "B", "C"]
  , "e3": ["A", "C"]
  }

const reducer = (previous, current) => {
  Object.defineProperty(previous, current.experiences, current);
  console.log("this is " + previous);
  return previous
}

const output = input.reduce(reducer, {})

if (JSON.stringify(output) !== JSON.stringify(expected)) {
  console.error ("Źle ☠️")
  console.log(JSON.stringify({expected, output}, null, 2));
}
else {
  console.log("Dobrze");
}
