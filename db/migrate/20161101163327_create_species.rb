class CreateSpecies < ActiveRecord::Migration[5.0]
	def change
		create_table :specieses do |t|
			t.string :name

			t.timestamps
		end
	end
end
