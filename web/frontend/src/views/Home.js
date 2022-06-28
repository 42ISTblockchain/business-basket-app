import React from 'react'

export default function Home() {
  return (
    <div>
		<div className="form-control">
              <label className="label">
                <span className="label-text">Ücret</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Ücret giriniz..."
                  className="input input-bordered"
				  value = "34"
				  onChange={(e) => console.log(e)}
                />
                <span>TRY</span>
              </label>
            </div>
	</div>
  )
}
