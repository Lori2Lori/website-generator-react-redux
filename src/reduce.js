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
  { "e1":
    [ {
        name: "A",
        experiences: ["e1", "e2", "e3"]
      }
    , {
        name: "B",
        experiences: ["e1", "e2"]
      }
    ]
  , "e2":
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
  , "e3":
    [ {
        name: "A",
        experiences: ["e1", "e2", "e3"]
      }
    , {
        name: "C",
        experiences: ["e2", "e3"]
      }
    ]
  }

const reducer = (memo, job) => {
  for (e of job.experiences ) {
    if (typeof memo[e] !== 'undefined') {
      memo[e] = memo[e].concat(job)
    } else {
      memo[e] = [job]
    }
  }
  return memo
}

const output = input.reduce(reducer, {})

if (JSON.stringify(output) !== JSON.stringify(expected)) {
  console.error ("Bad ☠️")
  console.log(JSON.stringify({expected, output}, null, 2));
}
else {
  console.log("OK 😽");
  console.log(JSON.stringify({output}, null, 2));
}
